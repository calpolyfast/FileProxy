# FileProxy
The file proxy/upload gui for our CTF files

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
