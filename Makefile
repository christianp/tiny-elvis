TEL_DIR=tel150
EXE=TNYELVIS.EXE

ICONS=$(wildcard extracted/$(EXE)*.ico)
PNGS=$(patsubst extracted/TNYELVIS.EXE_14_ICON_%.ico, pngs/%.png, $(ICONS))

WAVS=$(wildcard $(TEL_DIR)/*.WAV)
MPTHREES=$(patsubst $(TEL_DIR)/%.WAV, mp3s/%.mp3, $(WAVS))

resources: $(PNGS) $(MPTHREES)

make_mp3s: $(MPTHREES)

pngs:
	mkdir -p $@

mp3s:
	mkdir -p $@

pngs/%.png: extracted/TNYELVIS.EXE_14_ICON_%.ico pngs
	convert $< $@

mp3s/%.mp3: $(TEL_DIR)/%.WAV mp3s
	ffmpeg -i $< $@

extract_icons: $(TEL_DIR)/$(EXE)
	mkdir -p extracted && cd $(TEL_DIR) && wrestool -x --output=. -t14 -o ../extracted $(EXE)
