type ButtonProviderProps = {
  id: number;
  providerName: string;
  onClick: (id: number) => void;
};

const ButtonProvider = ({ id, providerName, onClick }: ButtonProviderProps) => (
  <div>
    <button
      key={id}
      onClick={() => {
        console.log("Bouton cliqué :", providerName, "id =", id);
        onClick?.(id);
      }}
      className="m-1 border border-brand px-3 py-1 rounded-full text-sm hover:bg-brand transition"
    >
      {providerName}
    </button>
  </div>
);

export default ButtonProvider;
