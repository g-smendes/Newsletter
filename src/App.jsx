import { useState } from "react";

import ArticlesList from "./Components/ArticleList/ArticleList";
import Form from "./Components/Form/Form";
import Headers from "./Components/Header/Header";

const App = () => {
  const [User, setUser] = useState();
  const hasUser = Boolean(User);

  return (
    <div className="h-screen">
      <Headers User={User} />
      {hasUser && <ArticlesList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;
