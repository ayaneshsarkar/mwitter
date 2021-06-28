const HomeContainer = props => {
  console.log(props);
  return (
    <div className="full-wrapper full-height homeBackground"
      style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.7)), url(${props.homeBackground})` }}
    >
      { props.children }
    </div>
  );
}

export default HomeContainer;