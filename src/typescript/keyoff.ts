type Staff = {
  name: string;
  salary: number;
};

type staffKeys = keyof Staff;

const valor: staffKeys = "name";
