const PostNav = props => {
  return (
    <nav className="posts__nav fullVhHeight">
      { props.children }
    </nav>
  );
}

export default PostNav;