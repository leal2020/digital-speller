// Define the pin to read the signal from
const int inputPin = 36;  // Sensor-VP pin

// Set the ADC resolution (ESP32 supports up to 12 bits)
const int adcResolution = 4095;  // 12-bit resolution, max value is 4095

void setup() {
  // Initialize Serial Monitor
  Serial.begin(115200);  // Set baud rate to 115200
  while (!Serial);       // Wait for Serial to initialize

  // Print a startup message
  Serial.println("ESP32 Signal Reader Initialized");
}

void loop() {
  // Read the analog signal from the input pin
  int signalValue = analogRead(inputPin);

  Serial.print(signalValue);

  // Add a small delay for stability (adjust as needed)
  delay(500);// 500 ms
}
