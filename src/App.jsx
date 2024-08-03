const App = () => {
  return (
    <div>
      <form>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default App;
