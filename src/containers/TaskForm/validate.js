const validate = values => {
  const errors = {};
  const { title, description } = values;
  if (!title) {
    errors.title = 'Please enter a title';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'Title must be at least 5 characters';
  }
  if (!description) {
    errors.description = 'Please enter a description';
  } else if (description.trim() && description.length < 5) {
    errors.description = 'Description must be at least 5 characters';
  }
  return errors;
};

export default validate;
