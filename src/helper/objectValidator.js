export default function ObjectValidator(schema) {
  let errors = {};
  if (Object.keys(schema).length > 0) {
    Object.keys(schema).forEach((key) => {
      Object.keys(schema[key]).forEach((rule) => {
        let resRule = schema[key][rule]();
        if (!!resRule) errors[key] = resRule;
      });
    });
  }

  return Object.keys(errors).length === 0 ? false : errors;
}
