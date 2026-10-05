const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Calculator Backend is running"
    });
});

app.post("/calculate", (req, res) => {
    const { num1, num2, operation } = req.body;

    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;

        case "multiply":
            result = num1 * num2;
            break;

        case "divide":
            if (num2 === 0) {
                return res.status(400).json({
                    error: "Cannot divide by zero"
                });
            }
            result = num1 / num2;
            break;

        default:
            return res.status(400).json({
                error: "Invalid operation"
            });
    }

    res.json({ result });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});