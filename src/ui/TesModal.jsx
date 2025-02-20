import { useState } from "react";
import Modal from "./Modal";

export default function TesModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Buka Modal
          </button>
    
          {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-semibold">Judul Modal</h2>
            <p className="mt-2 text-gray-600">Klik di luar modal untuk menutup.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Tutup
            </button>
          </Modal> */}
        </div>
      );
  }