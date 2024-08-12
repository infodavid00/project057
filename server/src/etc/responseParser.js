export function ok(message, data) {
  return {
    ack: true,
    message,
    data,
  };
}

export function bad(message, trace) {
  return {
    ack: false,
    message,
    trace,
  };
}
