import { db } from '../../../config/firebase';
import { ADD_VIDEO } from './actions';

export const registerVideo = ({ id, title }) => async dispatch => {
  await db.ref('videos').child(id).update({ id, title });

  dispatch(addVideo({ id, title }));
};

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
});

export const fetchVideos = () => dispatch => {
  db.ref('videos')
    .orderByChild('title')
    .on('child_added', child => {
      dispatch(addVideo(child.val()));
    });
  // db.ref('videos').on('value', snapshot => {
  //   console.log('snapshot:', snapshot.val());
  //   snapshot.forEach(child => {
  //     dispatch(addVideo(child.val()));
  //   });
  // });
};
