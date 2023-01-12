import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Path from "model/Path";
import IndexPage from "pages/index";
import Study1Page from "pages/study1";
import Study2Page from "pages/study2";
import Study3Page from "pages/study3";
import Study4Page from "pages/study4";
import TodoListPage from "pages/todoList";
import TodoListContextPage from "pages/todoListContext";
import TodoListRecoilPage from "pages/todoListRecoil";
import BoardPage from "pages/board";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.INDEX} element={<IndexPage />} />
        <Route path={Path.STUDY1} element={<Study1Page />} />
        <Route path={Path.STUDY2} element={<Study2Page />} />
        <Route path={Path.STUDY3} element={<Study3Page />} />
        <Route path={Path.STUDY4} element={<Study4Page />} />
        <Route path={Path.TODO_LIST} element={<TodoListPage />} />
        <Route
          path={Path.TODO_LIST_CONTEXT}
          element={<TodoListContextPage />}
        />
        <Route path={Path.TODO_LIST_RECOIL} element={<TodoListRecoilPage />} />
        <Route path={Path.BOARD} element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
