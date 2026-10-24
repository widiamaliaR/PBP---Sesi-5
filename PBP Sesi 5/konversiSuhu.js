(async () => {
    const chalk = (await import('chalk')).default;
    const { celciusToFahrenheit } = require('./rumusSuhu');
    const suhuCelcius = 30;
    const hasil = celciusToFahrenheit(suhuCelcius);

    console.log(chalk.blue("=== PROGRAM KONVERSI SUHU ==="));
    console.log(chalk.green("Suhu Celsius: " + suhuCelcius + "°C"));
    console.log(chalk.yellow("Hasil Fahrenheit: " + hasil + "°F"));
})();
