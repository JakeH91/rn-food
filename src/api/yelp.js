import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer gtPOqPVzj9xCXabJFpQUl7dLuYQb2omhiX3R_b_mRCL1NttjXxCK2GOJnqXm__NlZu9RsYmImCo9QLm5rl1E_xClNCwwhArbzsfeelkXzrI3HJ3w0zmpoAr636T2X3Yx'
  }
});
