const HomeWrapper = props => {
  return (
    <div className="homeHero">
      <div className="wrapper home homeWrapper">
        { props.children }
      </div>
    </div>
  );
}

export default HomeWrapper;