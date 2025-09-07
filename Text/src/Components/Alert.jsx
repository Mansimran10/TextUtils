function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          class={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.mssg}</strong> Status: {props.alert.type}
        </div>
      )}
    </>
  );
}
export default Alert;
