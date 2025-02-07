// Define the pin to read the signal from
const int inputPin = 36;  // Use GPIO34 (one of the ADC-capable pins)

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

  // Map the value (optional, depending on your signal range)
  float voltage = signalValue * (3.3 / adcResolution);  // Convert ADC value to voltage

  // Output the signal value and its corresponding voltage
  //Serial.print("Signal Value (ADC): ");
  Serial.println(signalValue);
  //Serial.print(" | Voltage: ");
  //Serial.print(voltage, 3);  // Print voltage with 3 decimal points
  //Serial.println(" V");

  // Add a small delay for stability (adjust as needed)
  delay(500);// 500 ms
}