import isEmail from 'validator/lib/isEmail';

export default function getUnvalidFields(fields: {}): string[] {
  const unvalidFields = [];

  Object.keys((currField: string) => {
    if (fields[currField] === '') {
      unvalidFields.push(currField);
    }

    if (currField === 'email' && !isEmail(fields[currField])) {
      unvalidFields.push(currField);
    }
  });

  return unvalidFields;
}
