import { FormsRouter } from "../router/forms.router";

export type FormOptions = { item: string; path: string };
export const formOptions: FormOptions[] = [
  { item: "form1", path: "/form1" },
  { item: "form2", path: "/form2" },
  { item: "form3", path: "/form3" },
];

export function Forms() {
  return (
    <main className="App-forms">
      <FormsRouter formOptions={formOptions}></FormsRouter>
    </main>
  );
}
