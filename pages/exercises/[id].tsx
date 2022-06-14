import { useRouter } from "next/router";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
} from "@/features/index";
import React, { ReactElement } from "react";

type Props = {};

const Exercise = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const ExerciseComponent: { [id: string]: ReactElement } = {
    "1": <Exercise1 />,
    "2": <Exercise2 />,
    "3": <Exercise3 />,
    "4": <Exercise4 />,
    "5": <Exercise5 />,
    "6": <Exercise6 />,
    "7": <Exercise7 />,
    "8": <Exercise8 />,
    "9": <Exercise9 />,
  };

  return <>{id && ExerciseComponent[id.toString()]}</>;
};

export default Exercise;
