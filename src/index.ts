import server from "./server";
import colors from "colors"


const port = process.env.PORT || process.env.PORT_BACKEND_DEV;
server.listen(port, () => {
    console.log(colors.black.bold.bgMagenta(`Servidor UNEFA6tosemestre2025 Conectado por el Puerto ${port}`));
})