# FileProxy
The file proxy/upload gui for our CTF files

## Getting Started
1. Install node.js
2. Fork and clone repo.
3. cd into root directory
4. Run: ```npm install```
5. Run: ```npm start```

## Notes
* Use passportjs-local to check whether or not the user entered the password already
    * only require password, we will have a default hidden username
    * It will be middleware as well to check each request to the server on whether they are currently logged in. If not it will redirect to password page

* Hopefully upload files directly browser -> S3 instead of browser -> server -> S3

You can use https://github.com/Alackey/Weatherme as another nodejs example project

## Configuring Credentials

**Before using this for development, configure credentials.**

The best way to configure credentials on a development machine is to use the `~/.aws/credentials` file, which might look like:

```
[default]
aws_access_key_id = MY-ACCESS-KEY-ID
aws_secret_access_key = MY-SECRET-KEY
```

You can learn more about the credentials file from this
[blog post](http://blogs.aws.amazon.com/security/post/Tx3D6U6WSFGOK2H/A-New-and-Standardized-Way-to-Manage-Credentials-in-the-AWS-SDKs).

Alternatively, you can set the following environment variables:

```
AWS_ACCESS_KEY_ID=MY-ACCESS-KEY-ID
AWS_SECRET_ACCESS_KEY=MY-SECRET-KEY
```
