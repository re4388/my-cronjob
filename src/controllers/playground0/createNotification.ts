import { RequestHandler } from 'express';
import notifier from 'node-notifier';
import schedule from 'node-schedule';
import * as chrono from 'chrono-node';

export const createNotification: RequestHandler = (req, res) => {
  const { scheduledAt, msg } = req.body;

  // 480 is the offset to covert from utc+8 to utc (system)
  const parsedDate = chrono.parseDate(scheduledAt, { timezone: 480 });
  console.log('paredResult', parsedDate);
  schedule.scheduleJob(parsedDate, onScheduled);

  function onScheduled() {
    notifier.notify({
      title: '提醒',
      message: msg,
    });
  }

  // Object

  res.status(200).json({
    status: 'reminder is set successfully',
  });
};
