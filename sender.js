function sendStickers(times=0, maximumToSend=140) {

  const openStickers = document.getElementsByClassName('lhggkp7q mvj9yovn f804f6gw fyy3ld6e svlsagor dntxsmpk ixn6u0rb s2vc4xk1 o0wkt7aw t1844p82 esbo3we0 qizq0yyl axi1ht8l oybnjv0e')
  openStickers[1].click();
	const timeoutToWait = 300 

	setInterval( () => {
		if (times >= maximumToSend) return;
    const images = document.getElementsByClassName('PD3sk _9QB_N _1V-dP')
		const stickerToSend = 0

		images[stickerToSend].click()

	}, timeoutToWait);
}
