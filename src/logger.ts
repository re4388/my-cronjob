import { createLogger, format, transports } from 'winston';
import chalk from 'chalk';

export class Logger {
  public logger;
  private readonly logFormat;

  constructor() {
    this.logFormat = format.combine(
      format.timestamp(),
      format.colorize(),
      format.printf((info) => {
        const { timestamp, level, message, ...meta } = info;
        const ts = timestamp.slice(0, 19).replace('T', ' ');
        const levelColorized = this.colorizeLevel(level);
        const metaString =
          meta && Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
        return `${ts} [${levelColorized}] ${message}${metaString}`;
      })
    );
    this.logger = this.createLogger();
  }

  public getLogger() {
    if (this.logger) {
      return this.logger;
    } else {
      return this.createLogger();
    }
  }

  private createLogger() {
    return createLogger({
      level: 'debug',
      format: this.logFormat,
      transports: [new transports.Console()],
    });
  }

  private colorizeLevel(level: string) {
    switch (level) {
      case 'error':
        return chalk.red(level);
      case 'warn':
        return chalk.yellow(level);
      case 'info':
        return chalk.cyan(level);
      case 'verbose':
        return chalk.blue(level);
      case 'debug':
        return chalk.magenta(level);
      case 'silly':
        return chalk.gray(level);
      default:
        return level;
    }
  }

  public error(message: string, meta?: Record<string, unknown>) {
    this.logger.error(message, meta);
  }

  public warn(message: string, meta?: Record<string, unknown>) {
    this.logger.warn(message, meta);
  }

  public info(message: string, meta?: Record<string, unknown>) {
    this.logger.info(message, meta);
  }

  public verbose(message: string, meta?: Record<string, unknown>) {
    this.logger.verbose(message, meta);
  }

  public debug(message: string, meta?: Record<string, unknown>) {
    this.logger.debug(message, meta);
  }

  public silly(message: string, meta?: Record<string, unknown>) {
    this.logger.silly(message, meta);
  }
}
