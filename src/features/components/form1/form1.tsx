import "./form1.scss";
export default function Form1() {
  return (
    <form className="form1">
      <label htmlFor="form1__name">
        Name
        <input type="text" id="Name" required />
      </label>
      <label htmlFor="form1__last-name">
        Last name
        <input type="text" id="form1__last-name" required />
      </label>
      <label htmlFor="form1__birth-date">
        Birth date
        <input type="text" id="form1__birth-date" required />
      </label>
      <fieldset>
        <legend>Choose your gender:</legend>
        <input type="radio" id="form1__Female" name="gender" value="F" />
        <label htmlFor="form1__Female">Female</label>
        <input type="radio" id="form1__Non-binary" name="gender" value="NB" />
        <label htmlFor="form1__Non-binary">Non-Binary</label>
        <input type="radio" id="form1__Male" name="gender" value="F" />
        <label htmlFor="form1__Male">Male</label>
        <input type="radio" id="form1__Non-declare" name="gender" value="F" />
        <label htmlFor="form1__Non-declare">Non-declare</label>
      </fieldset>

      <label htmlFor="form1__email">
        Email
        <input type="text" id="form1__email" required />
      </label>
      <label htmlFor="form1__newsletter">
        Do you want to receive our Newsletter?
        <input type="checkbox" id="form1__newsletter" required />
      </label>
      <button type="submit" disabled>
        Siguiente
      </button>
    </form>
  );
}
