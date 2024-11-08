
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Labs from './Labs';
import Kanbas from './Kanbas';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './Kanbas/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          {/* Default route redirects to Kanbas */}
          <Route path="/" element={<Navigate to="/Kanbas" />} />

          {/* Labs route */}
          <Route path="/Labs/*" element={<Labs />} />

          {/* Kanbas route */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}




// actually working 11/7
// src/App.tsx

// import React from 'react';
// import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Labs from './Labs';
// import Kanbas from './Kanbas';

// export default function App() {
//   return (
//     <HashRouter>
//       <div>
//         <Routes>
//           {/* Default route redirects to Kanbas */}
//           <Route path="/" element={<Navigate to="/Kanbas" />} />

//           {/* Labs route */}
//           <Route path="/Labs/*" element={<Labs />} />

//           {/* Kanbas route */}
//           <Route path="/Kanbas/*" element={<Kanbas />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }
