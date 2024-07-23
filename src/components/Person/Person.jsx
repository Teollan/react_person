import './Person.scss';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerTitle;

  switch (sex) {
    case 'm':
      partnerTitle = 'wife';
      break;
    case 'f':
      partnerTitle = 'husband';
      break;
    default:
      throw new Error();
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried ? (
        <p className="Person__partner">{`${partnerName} is my ${partnerTitle}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}
