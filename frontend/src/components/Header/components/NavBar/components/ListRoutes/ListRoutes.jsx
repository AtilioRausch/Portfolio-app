import "./styles/ListRoutes.scss";
function ListRoutes() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Developments", path: "/developments" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <li className="listRoutes">
        {routes.map((route) => (
          <ul key={route.name}>
            <a href={route.path}>{route.name}</a>
          </ul>
        ))}
      </li>
    </>
  );
}
export default ListRoutes;
