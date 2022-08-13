export default function Voice() {
    return (
      <>
        <div class="col">
            <div class="card shadow-sm mt-3">
                <div class="card-body">
                    <p class="card-text">こちらは自動応答です。お名前とご用件を教えて下さい。</p>
                    <audio controls >
                        <source src="../assets/voice/R-001.wav">再生</source>
                    </audio>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted"></small>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
