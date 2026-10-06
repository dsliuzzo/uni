"""Inverti colori: drag&drop o Ctrl+V di un'immagine, poi salva o copia.

Avvio:  python invert.py   (o python3 invert.py)
Al primo avvio installa PySide6 in un ambiente virtuale dedicato.
"""
import os
import subprocess
import sys

try:
    import PySide6  # noqa: F401
except ImportError:
    import venv

    venv_dir = os.path.join(os.path.expanduser("~"), ".invert_colors_venv")
    bin_dir = "Scripts" if os.name == "nt" else "bin"
    py = os.path.join(venv_dir, bin_dir, "python")

    if os.environ.get("INVERT_BOOTSTRAPPED"):
        sys.exit("Impossibile importare PySide6 nemmeno dopo l'installazione.")

    if not os.path.exists(py):
        print("Primo avvio: creo l'ambiente virtuale...")
        venv.create(venv_dir, with_pip=True)
    if subprocess.call([py, "-c", "import PySide6"]) != 0:
        print("Installo PySide6 (una tantum, ci vuole un minuto)...")
        subprocess.check_call([py, "-m", "pip", "install", "PySide6"])

    env = dict(os.environ, INVERT_BOOTSTRAPPED="1")
    sys.exit(subprocess.call([py, os.path.abspath(__file__)] + sys.argv[1:], env=env))

from PySide6.QtCore import Qt
from PySide6.QtGui import QGuiApplication, QImage, QKeySequence, QPixmap, QShortcut
from PySide6.QtWidgets import (
    QApplication, QFileDialog, QHBoxLayout, QLabel,
    QPushButton, QSizePolicy, QVBoxLayout, QWidget,
)

PLACEHOLDER = "Trascina un'immagine qui\noppure incolla (Ctrl+V / Cmd+V)"


class InvertApp(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Inverti colori")
        self.resize(600, 500)
        self.setAcceptDrops(True)
        self.result = None  # QImage invertita

        self.label = QLabel(PLACEHOLDER)
        self.label.setAlignment(Qt.AlignCenter)
        self.label.setStyleSheet("border: 2px dashed gray;")
        # Ignored: l'anteprima non deve ingrandire la finestra
        self.label.setSizePolicy(QSizePolicy.Ignored, QSizePolicy.Ignored)

        self.btn_save = QPushButton("Salva...")
        self.btn_copy = QPushButton("Copia negli appunti")
        self.btn_save.clicked.connect(self.save)
        self.btn_copy.clicked.connect(self.copy)
        self.set_buttons(False)

        row = QHBoxLayout()
        row.addWidget(self.btn_save)
        row.addWidget(self.btn_copy)
        layout = QVBoxLayout(self)
        layout.addWidget(self.label, 1)
        layout.addLayout(row)

        # QKeySequence.Paste = Ctrl+V su Linux, Cmd+V su Mac
        QShortcut(QKeySequence.Paste, self, activated=self.paste)

    def set_buttons(self, enabled):
        self.btn_save.setEnabled(enabled)
        self.btn_copy.setEnabled(enabled)

    def load(self, image):
        if image is None or image.isNull():
            return
        # ARGB32 + InvertRgb: inverte R,G,B e lascia intatta la trasparenza
        image = image.convertToFormat(QImage.Format_ARGB32)
        image.invertPixels(QImage.InvertRgb)
        self.result = image
        self.set_buttons(True)
        self.update_preview()

    def update_preview(self):
        if self.result:
            pix = QPixmap.fromImage(self.result).scaled(
                self.label.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation
            )
            self.label.setPixmap(pix)

    def resizeEvent(self, event):
        super().resizeEvent(event)
        self.update_preview()

    # --- input ---
    def paste(self):
        self.load(QGuiApplication.clipboard().image())

    def dragEnterEvent(self, event):
        mime = event.mimeData()
        if mime.hasUrls() or mime.hasImage():
            event.acceptProposedAction()

    def dropEvent(self, event):
        mime = event.mimeData()
        if mime.hasUrls():
            for url in mime.urls():
                if url.isLocalFile():
                    self.load(QImage(url.toLocalFile()))
                    return
        if mime.hasImage():
            self.load(mime.imageData())

    # --- output ---
    def save(self):
        path, _ = QFileDialog.getSaveFileName(
            self, "Salva immagine", "invertita.png", "PNG (*.png);;JPEG (*.jpg)"
        )
        if path:
            self.result.save(path)

    def copy(self):
        QGuiApplication.clipboard().setImage(self.result)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    win = InvertApp()
    win.show()
    sys.exit(app.exec())
