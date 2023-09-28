import Input from "../Input/Input";

const Form = ({ onSubmit }) => {
  const safeSbmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSbmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
    >
      <Input type="text" required placeholder="Insira seu nomem..." />
      <Input type="email" required placeholder="Inista seu e-mail..." />
      <button
        type="submit"
        className="py-1 px-5  w-full max-x-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-block hover:-translate-y-l hover:delay-200"
      >
        Seguir
      </button>
    </form>
  );
};
export default Form;
