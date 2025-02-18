function ListRendering() {
  const users = [
    {
      id: 1,
      name: 'John',
      age: 24,
      hobby: 'Playing Games',
    },
    {
      id: 2,
      name: 'Jane',
      age: 25,
      hobby: 'Playing Guitar',
    },
    {
      id: 3,
      name: 'Jessy',
      age: 20,
      hobby: 'Modeling',
    },
    {
      id: 4,
      name: 'Adam',
      age: 24,
      hobby: 'Playing football',
    },
  ]
  
  return (
    <>
      <div className="users-container">
        {
          users.map((user) => {
            return (
              <div key={user.id} className="user-item">
                <h2>{user.name}</h2>
                <p>This is users age: {user.age}</p>
                <p>This is users hobby: {user.hobby}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}


export default ListRendering;