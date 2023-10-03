import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TabBar from './components/TabBar';
import HotelList from './components/HotelList';
import HotelDetails from './components/HotelDetails';
import TopHead from './components/TopHead';

function App() {
    return (
        <Router>
            <div className="page-container">
                <TopHead />
                <TabBar />
                <Routes>
                    <Route path="/" element={<HotelList />} />
                    <Route path="/property/:id" element={<HotelDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
