interface Teacher {
  readonly firstName: string;
  readonly lastName: string;

  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Abo",
  lastName: "Aubaida",
  fullTimeEmployee: true,
  location: "Gaza"
};
