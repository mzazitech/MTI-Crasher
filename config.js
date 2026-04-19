// This is the configuration file for the MTI-Crasher project.
// Please ensure all settings are correctly configured.
// You can change the values below based on your requirements.

const config = {
    // General settings
    mode: 'development', // Mode of operation (development/production)
    port: 3000, // The port the server will run on

    // Database settings
    db: {
        host: 'localhost', // Database host
        user: 'root', // Database username
        password: 'password', // Database password
        name: 'mti_crasher', // Database name
    },

    // Other configurations
};

module.exports = config;