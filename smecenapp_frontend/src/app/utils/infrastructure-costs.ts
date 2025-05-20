
export const INFRASTRUCTURE_COSTS: Record<string, number> = {
  // Entornos
  dev: 0,
  test: 0,
  prod: 0,

  // Pago
  ondemand: 0,
  reserved: 0,
  spot: 0,

  // Tipo de aplicación
  web: 0,
  backend: 0,
  mobile: 0,
  basica: 0,
  escalable: 0,
  altaDisponibilidad: 0,

  // Cómputo
  ec2: 40,
  fargate: 30,
  eks: 50,

  // Bases de datos
  rds: 25,
  dynamo: 15,
  elasticache: 20,

  // Storage
  s3: 10,
  cloudfront: 12,

  // Red
  waf: 8,
  elb: 15,
  vpc: 5,
  subnets: 3,

  // Monitoreo
  cloudwatch: 15,
  guardduty: 10,
  config: 7,
};
