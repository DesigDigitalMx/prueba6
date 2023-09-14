function isLocalOpen() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábado
  const hour = now.getHours();

  // Verificar si el local está abierto de acuerdo al día y hora
  // if (
  //   (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 10 && hour < 13) || // Lun a Vie: 10:00am - 13:00pm
  //   (dayOfWeek >= 1 && dayOfWeek <= 6 && hour >= 19 && hour < 22) // Lun a Vie: 19:00pm - 22:30pm
  //   (dayOfWeek === 6 && hour >= 19 && hour < 23) // Sábado: 19:00pm - 23:30pm
  // ) {
  //   return true; // El local está abierto
  // } else {
  //   return false; // El local está cerrado
  // }
  if (
    (dayOfWeek >= 2 && dayOfWeek <= 6 && hour >= 24) || // Martes a Sábado: desde las 24:00pm
    (dayOfWeek === 0 && hour >= 24) // Domingo: desde las 24:00pm
    // (dayOfWeek === 1 && hour < 2) // Lunes: hasta las 2:00am
  ) {
    return true; // El local está abierto
  } else {
    return false; // El local está cerrado
  }
}

export { isLocalOpen };
