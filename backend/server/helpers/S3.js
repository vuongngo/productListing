import s3 from 's3';

const client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  s3Options: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    region: process.env.S3_REGION,
  }

});

export const s3Upload = {
  s3Params: {
    Bucket: process.env.S3_BUCKET,
    ACL: 'public-read'
  }
};

export function getUrl(key) {
  return s3.getPublicUrlHttp(process.env.S3_BUCKET, key);
}

export default client;
