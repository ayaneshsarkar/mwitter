<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'octaposts_api' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'h-/5B/A!17+5HCF,`JLW=f(Dn:-yh,DsH`TdSrVaz[aJFHIO& 9Z+,#[^b19LG(z' );
define( 'SECURE_AUTH_KEY',  'CMvbJZpmOIS{S64(EA(BjINZDnX!~o,frm1#^L_tnU,r>NDHyl=t5:UY/1rsGZdX' );
define( 'LOGGED_IN_KEY',    'OtW64^2}1T]p[tcB9wi]jd>F!.lnom_%+ 5?:Kb$OU7z@.XUtow$}H8po4U UrKb' );
define( 'NONCE_KEY',        'M(8KY1H$/8~5YS2(]ytWd%;>}daiZR_|^`QLTHF||z]:RN&vCW(&Upsd@bH~S$KZ' );
define( 'AUTH_SALT',        '|0gn,(~SDp|u_J<w/A5aKXQn;NsL%[wu<vg`>QtZxn/&:vpz-.9BK^O8$X1RRCN(' );
define( 'SECURE_AUTH_SALT', '0s^AKTVG:+HM(`a`3MVKgNU=vYrI+V<,U%{]N5=#aoKG@!G:BJGOA3,J@ g_bu @' );
define( 'LOGGED_IN_SALT',   'E+x.EI~)NtQxX)2xh[z:wmtm>s*8G*Wlaa[>gy|0F}H_L}:v_MA5l?{ CGdzor@N' );
define( 'NONCE_SALT',       '6[z?u`|ojSJFJ+oBk.c7ODA2wMhzdsWpF%~u@X(VzFVd-.2b.pmqg%(Z)B&G=:+E' );
define('JWT_AUTH_SECRET_KEY', 'secret');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
