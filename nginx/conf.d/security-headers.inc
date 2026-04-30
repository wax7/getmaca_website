# Common headers — wird via `include` in jeder location eingebunden,
# weil nginx add_header NICHT vererbt sobald eine inner location selbst
# add_header verwendet. Alle Locations die add_header brauchen, müssen
# diese Datei inkludieren.

add_header X-Frame-Options            "SAMEORIGIN"                 always;
add_header X-Content-Type-Options     "nosniff"                    always;
add_header X-XSS-Protection           "1; mode=block"              always;
add_header Referrer-Policy            "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security  "max-age=31536000; includeSubDomains; preload" always;
add_header Permissions-Policy         "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=()" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-site" always;
add_header Content-Security-Policy-Report-Only "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net; frame-src https://td.doubleclick.net; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'" always;
