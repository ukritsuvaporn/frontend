type MyNameProps = { title: string; subtitle: string; showSomething: boolean };

export const MyName = (props: MyNameProps) => {
  return (
    <>
      <span>
        My name is {props.title} {props.subtitle}{" "}
        {props.showSomething ? "*******" : ""}
      </span>
    </>
  );
};
