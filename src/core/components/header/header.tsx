import logo from "./logo.svg";
type HeaderProps = {
  children: JSX.Element;
};

export function Header({ children }: HeaderProps) {
  return (
    <header className="App-header">
      <h1>Formulario de tres pasos con React & Typescript</h1>
    </header>
  );
}
