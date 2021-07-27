const PostNav = props => {
  return (
    <nav className="posts__nav fullVhHeight">
      <div className="posts__nav_container">
        { props.children }
      </div>
    </nav>
  );
}

export default PostNav;