# App  carrito de compras

Este proyecyo es una simulación se un buscador y un carrito de compra 

## Iinstalacion para correr el proyecto

Directorios del Proyecto:

### `git clone https://github.com/celestino1987/app-carrito.git`

puedes clonar el proyecto en tu IDE, y luego hacer un npm install 

### `npm start`
El proyecto se ejecutara en  http://localhost:3000/
también deberias correr el mocks-server una vez hagas npm start de la aplicacion , puedes abrir otra terminal y hacer : cd mocks-server , luego npm start.
 
## Construido con :
- React , Redux , redux-thunk 
- Javascript 
- css




## Algunas funcionalidades
![Inicio aplicacion](/src/img/portada.jpg)

codigo:
~~~ export const AppCard = ({ anime, random }) => {
  const history = useHistory();

  return (
    <>
      <div className="card">
        <div
          onClick={() =>
            history.push(`/details/${anime ? anime.mal_id : random.mal_id}`)
          }
        >
          <img
            src={anime ? anime?.image_url : random?.image_url}
            alt={"imagen de "}
          />
        </div>
        <h3>{anime ? anime.title : random.title}</h3>
      </div>
    </>
  );
}; 
~~~ 


![detalles del articulo](/src/img/detalles.jpg)
codigo:


~~~ 
 //Logica para añadir  al carrito

  const id = movie?.find((id) => id.mal_id === detail.mal_id);
  const detailsObject = {
    price: detail.score * 2,
    foto: detail?.image_url,
    mal_id: detail.mal_id,
    amount: amount,
  };

  const update = {
    ...detailsObject,
    amount: id?.amount + 1,
  };
  //funcion para añadir al carrito y si existe mandar solo  el put
  const addToCart = () => {
 
    setDisabledBtn(false);
    if (id?.mal_id === detailsObject.mal_id) {
      dispatch(axiosPutMovies(id.id, update));
    } else {
      dispatch(axiosPostMovies(detailsObject));
    }
    setTimeout(() => {
      setDisabledBtn(true);
    }, 2000);

~~~ 
![Carrito de compras](/src/img/carrito.jpg)

codigo:
~~~
 const handleDelete = (id) => {
    dispatch(openModal(false));
    serviceSwal(
      "question",
      "¿Desea eliminar el producto?",
      "",
      true,
      true,
      false
    ).then((res) => {
      if (res.isConfirmed) {
        dispatch(axiosDelMovies(id));
        try {
          movie.length - 1 < 1
            ? dispatch(openModal(false))
            : dispatch(openModal(true));
        } catch {
          serviceSwal("error", "", "Error", false, false, 1500);
        }
      } else {
        dispatch(openModal(true));
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(openLoading(true));
    }, 1000);

    dispatch(openLoading(false));
~~~
## WiKi:
puedes encontrarvmucho más de este proyecto en [wiki](https://support.zendesk.com/hc/es/articles/4408846544922-Uso-de-Markdown-para-el-formato-de-texto)

## Autores:
- jesús Prada Celestino