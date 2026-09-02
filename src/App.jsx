import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
    return (
        <BrowserRouter>

            {/* Reset scroll position whenever route changes */}
            <ScrollToTop />

            <MainLayout>
                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/resume"
                        element={<Resume />}
                    />

                    <Route
                        path="/projects"
                        element={<Projects />}
                    />

                    <Route
                        path="/projects/:id"
                        element={<ProjectDetails />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                </Routes>
            </MainLayout>

        </BrowserRouter>
    );
}

export default App;