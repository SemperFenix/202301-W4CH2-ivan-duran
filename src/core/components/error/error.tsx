import "./error.scss";
export default function Error() {
  const callError = () => {
    const dialog = document.querySelector("dialog");
    dialog?.show();
  };

  return (
    <>
      <dialog>La ruta introducida no es válida.</dialog>
      {callError()}
    </>
  );
}
