<?php
// Contact form handler for GoDaddy cPanel hosting.
// Receives the JSON posted by the form on eindata.nl and emails it with PHP mail().

$to = 'info@eindata.nl';
$from = 'website@eindata.nl'; // must be an address on this domain for good deliverability

header('Content-Type: application/json; charset=utf-8');

function respond($status, $data)
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed']);
}

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) {
    respond(400, ['error' => 'Invalid request']);
}

function field($body, $key, $max)
{
    $value = isset($body[$key]) && is_string($body[$key]) ? trim($body[$key]) : '';
    return mb_substr($value, 0, $max);
}

// Honeypot: real visitors never fill this hidden field, bots usually do.
if (field($body, 'website', 200) !== '') {
    respond(200, ['ok' => true]);
}

// Strip line breaks from single-line fields to prevent email header injection.
$name = str_replace(["\r", "\n"], ' ', field($body, 'name', 200));
$email = field($body, 'email', 200);
$company = str_replace(["\r", "\n"], ' ', field($body, 'company', 200));
$message = field($body, 'message', 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Please fill in your name, a valid email and a message.']);
}

$subject = '=?UTF-8?B?' . base64_encode("New message via eindata.nl from $name") . '?=';
$text = "Name: $name\nEmail: $email\nCompany: " . ($company !== '' ? $company : '-') . "\n\n$message\n";
$headers = implode("\r\n", [
    "From: EinData website <$from>",
    "Reply-To: $email",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!mail($to, $subject, $text, $headers, "-f$from")) {
    respond(500, ['error' => 'Could not send message']);
}

respond(200, ['ok' => true]);
